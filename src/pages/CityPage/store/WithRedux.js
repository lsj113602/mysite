import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// 为了初始化数据加入其它的provider，如果不是初始化则不要放在这里面
import DateProvider from '../../containers/DateProvider';
import HotelProvider from '../../containers/HotelProvider';
import FlightProvider from '../../containers/FlightProvider';
import DefaultChooseProvider from '../../containers/DefaultChooseProvider';

import {
  selectDepartureDate,
  selectPrice,
} from './selector';
import {
  change
} from './action';

const Render = ({ children, ...props }) => (
  <DateProvider id={props.id}>
    {
      (dateProps) => (
        <HotelProvider id={props.id} departureDate={props.departureDate || dateProps.defaultDate}>
          {
            (hotelProps) => (
              <FlightProvider id={props.id} departureDate={props.departureDate || dateProps.defaultDate}>
                {
                  (flightProps) => (
                    <DefaultChooseProvider id={props.id}>
                      {
                        (defaultChooseProps) => children({
                          ...props,
                          ...dateProps,
                          departureDate: props.departureDate || dateProps.defaultDate,
                          adultPrice: props.adultPrice || dateProps.adultPrice,
                          childPrice: props.childPrice || dateProps.childPrice,
                          babyPrice: props.babyPrice || dateProps.babyPrice,
                          elderPrice: props.elderPrice || dateProps.elderPrice,
                          singleSupplementPrice: props.singleSupplementPrice || dateProps.singleSupplementPrice,
                          inventory: props.inventory || dateProps.inventory,
                          hotelName: defaultChooseProps.hotel ?
                            (props.hotelName || hotelProps.hotelName) : (props.hotelName),
                          hotelRoomName: defaultChooseProps.hotel ?
                            (props.hotelRoomName || hotelProps.hotelRoomName) : (props.hotelRoomName),
                          hotel: defaultChooseProps.hotel ? // eslint-disable-line
                            (props.hotel.productId ? props.hotel : hotelProps.hotel) : (props.hotel),
                          flightProductId: defaultChooseProps.flight ?
                            (props.flightProductId || flightProps.productId) : (props.flightProductId),
                          flightResource: defaultChooseProps.flight ? // eslint-disable-line
                            (props.flightProductId ? props.flightResource : flightProps.resource)
                            : (props.flightResource),
                          departureCity: props.departureCity || flightProps.departureCity,
                        })
                      }
                    </DefaultChooseProvider>
                  )
                }
              </FlightProvider>
            )
          }
        </HotelProvider>
      )
    }
  </DateProvider>
);

// 需要触发什么行为
const mapDispatchToProps = (dispatch) => ({
  addCount: (num) => dispatch(addCount(num)),
  minusCount: (num) => dispatch(minusCount(num)),
});

// 需要渲染什么数据
const mapStateToProps = createStructuredSelector({
  departureDate: selectDepartureDate(),
  totalPrice: selectPrice(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Render.propTypes = {
  children: PropTypes.func,
  id: PropTypes.string,
  departureDate: PropTypes.string,
  adultPrice: PropTypes.number,
  childPrice: PropTypes.number,
  babyPrice: PropTypes.number,
  elderPrice: PropTypes.number,
  singleSupplementPrice: PropTypes.number,
  inventory: PropTypes.number,
  hotelName: PropTypes.string,
  hotelRoomName: PropTypes.string,
  hotel: PropTypes.object,
  flightProductId: PropTypes.string,
  departureCity: PropTypes.string,
  flightResource: PropTypes.object,
};

export default compose(withConnect)(Render);

