import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
// import Swiper from 'react-native-swiper';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';
import { BlurView } from 'expo-blur';
import { makeImgPath } from '../utils';
import Slide from '../components/Slide';
import Poster from '../components/Poster';
import HMedia from '../components/HMedia';
import VMedia from '../components/VMedia';
import { useInfiniteQuery, useQuery, useQueryClient } from 'react-query';
import { moviesApi, MovieResponse, Movie } from '../api';
import Loader from '../components/Loader';
import HList from '../components/HList';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
`;
const TrendingScroll = styled.FlatList`
  margin-top: 20px;
`;
const ListContainer = styled.View`
  margin-bottom: 40px;
`;
const ComingSoonTitle = styled(ListTitle)`
  margin-bottom: 30px;
`;
const VSeparator = styled.View`
  width: 20px;
`;
const HSeparator = styled.View`
  height: 20px;
`;

const Movies = () => {
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();
  const { isLoading: nowPlayingLoading, data: nowPlayingData } = useQuery<MovieResponse>(
    ['movies', 'nowPlaying'],
    moviesApi.nowPlaying
  );
  const {
    isLoading: upcomingLoading,
    data: upcomingData,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery<MovieResponse>(['movies', 'upcoming'], moviesApi.upcoming, {
    getNextPageParam: (currentPage) => {
      const nextPage = currentPage.page + 1;
      return nextPage > currentPage.total_pages ? null : nextPage;
    }
  });
  const { isLoading: trendingLoading, data: trendingData } = useQuery<MovieResponse>(
    ['movies', 'trending'],
    moviesApi.trending
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(['movies']);
    setRefreshing(false);
  };

  const loading = nowPlayingLoading || upcomingLoading || trendingLoading;
  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  console.log(upcomingData);
  

  return loading ? (
    <Loader />
  ) : upcomingData ? (
    <FlatList
      onEndReached={loadMore}
      onRefresh={onRefresh}
      refreshing={refreshing}
      ListHeaderComponent={() => (
        <>
          {/* <Swiper
            horizontal
            loop
            autoplay
            autoplayTimeout={3.5}
            showsButtons={false}
            showsPagination={false}
            containerStyle={{
              marginBottom: 20,
              width: '100%',
              height: SCREEN_HEIGHT / 4
            }}
          >
            {nowPlayingData?.results.map((movie) => (
              <Slide
                key={movie.id}
                backdropPath={movie.backdrop_path || ''}
                posterPath={movie.poster_path || ''}
                originalTitle={movie.original_title}
                voteAverage={movie.vote_average}
                overview={movie.overview}
                fullData={movie}
              />
            ))}
          </Swiper> */}
          {trendingData ? (
            <HList title="Trending Movie" data={trendingData.results} />
          ) : null}
          <ComingSoonTitle>Coming soon</ComingSoonTitle>
        </>
      )}
      data={upcomingData.pages.map((page) => page.results).flat()}
      keyExtractor={(item: Movie) => item.id + ''}
      ItemSeparatorComponent={HSeparator}
      renderItem={({ item }) => (
        <HMedia
          posterPath={item.poster_path || ''}
          originalTitle={item.original_title}
          overview={item.overview}
          releaseDate={item.release_date}
          fullData={item}
        />
      )}
    />
  ) : null;
};

export default Movies;
