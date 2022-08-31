import {View, Text} from 'react-native';
import React from 'react';
// import CalendarPicker from 'react-native-calendar-picker';
import {useState} from 'react';

const CalendarScreen = () => {
  const [state, setState] = useState(null);
  const onDateChange = date => {
    setState({
      selectedStartDate: date,
    });
  };
  return (
    <View>
      {/* <CalendarPicker
        onDateChange={onDateChange}
        weekdays={['일', '월', '화', '수', '목', '금', '토']}
        months={[
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ]}
        previousTitle={'<'}
        previousTitleStyle={{
          color: 'black',
          backgroundColor: 'pink',
          fontSize: 24,
        }}
        nextTitle={'>'}
        nextTitleStyle={{color: 'black', backgroundColor: 'pink', fontSize: 24}}
      /> */}
    </View>
  );
};

export default CalendarScreen;
