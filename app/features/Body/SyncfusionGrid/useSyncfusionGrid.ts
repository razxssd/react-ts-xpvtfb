import { useDispatch, useSelector } from 'react-redux';
import {
  getUniqueKeysFromArrayOfObj,
  IChildEmailGridElement,
  IPerson,
  removeSyncfusionLicenceBanner,
} from '../../../../core';
import { RootState } from '../../../../store/Store';
import { useEffect } from 'react';
import { GridModel } from '@syncfusion/ej2-react-grids';
import {
  filterPeopleByGenderSuccess,
  updatePersonSuccess,
} from '../../../../store/reducers/people.reducer';

export const useSyncfusionGrid = () => {
  const dispatch = useDispatch();
  const people: IPerson[] = useSelector(
    (state: RootState) => state.peopleState.filteredList
  );

  useEffect(() => {
    removeSyncfusionLicenceBanner();
  }, []);

  const columns = getUniqueKeysFromArrayOfObj(people, ['UserName', 'Emails']);

  /**
   * Will loop over people to create a flat array with all the emails related to each person, connected by a property named UserName
   * @param _people Array of people
   * @return Configuration for child grid containing all people emails
   */
  const getChildEmailGridOptions = (
    _people: IPerson[]
  ): GridModel | undefined => {
    let childEmailDataSource: IChildEmailGridElement[] = [];
    _people.forEach((person) => {
      if (!person.Emails) return;

      person.Emails.forEach((email) => {
        childEmailDataSource = [
          ...childEmailDataSource,
          { Email: email, UserName: person.UserName },
        ];
      });
    });

    if (childEmailDataSource.length == 0) return undefined;

    return {
      columns: [{ field: 'Email', headerText: 'Email ', width: 120 }],
      dataSource: childEmailDataSource,
      queryString: 'UserName',
    };
  };

  const childEmailGridOptions: GridModel | undefined =
    getChildEmailGridOptions(people);

  const filterRowsByGender = (gender: 'male' | 'female') => {
    dispatch(filterPeopleByGenderSuccess(gender));
  };

  const updatePersonHandler = (person: IPerson) => {
    dispatch(updatePersonSuccess(person));
  };

  return {
    people,
    columns,
    childEmailGridOptions,
    filterRowsByGender,
    updatePersonHandler,
  };
};
