import * as React from 'react';
import { RootState } from '../../../store/Store';
import { useDispatch, useSelector } from 'react-redux';
import hide from '../../../assets/icons/hide.png';
import show from '../../../assets/icons/show.png';
import { setIsGridVisibleSuccess } from '../../../store/reducers/people.reducer';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isGridVisible: boolean = useSelector(
    (state: RootState) => state.peopleState.isGridVisible
  );

  const setGridVisible = React.useCallback((isGridVisible: boolean) => {
    dispatch(setIsGridVisibleSuccess(isGridVisible));
  }, []);

  return (
    <section className="d-flex justify-content-center mb-10">
      <span className="rx-title">
        Consegna esercizio -{' '}
        <a href="https://www.eduardcapanu.com/">Eduard Capanu</a>
      </span>
      {isGridVisible ? (
        <div className="d-flex align-items-center ml-10">
          <button className="rx-button" onClick={() => setGridVisible(false)}>
            <span>Hide grid</span>
            <img src={hide} alt="Hide" className="rx-icon ml-10" />
          </button>
        </div>
      ) : (
        <div className="d-flex align-items-center ml-10">
          <button className="rx-button" onClick={() => setGridVisible(true)}>
            <span>Show grid</span>
            <img src={show} alt="Show" className="rx-icon ml-10" />
          </button>
        </div>
      )}
    </section>
  );
};
