import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useDebounceEx6 from '../hooks/useDebounceEx6';
import useSelectedUsersEx6 from '../hooks/useSelectedUsersEx6';
import useUsersEx6 from '../hooks/useUsersEx6';
import { Link, useNavigate } from 'react-router-dom';

function UsersPageEx6({value}) {

    const debounceSearch = useDebounceEx6(value, 2000);
    const {users, loading} = useUsersEx6();
    const {selectHandle} = useSelectedUsersEx6();
    const [count, setCount] = useState(10);

    // sorts
    const [ageSort, setAgeSort] = useState('');
    const [nameSort, setNameSort] = useState('');

    // filters
    const [genderFilter, setGenderFilter] = useState('');
    const [countryFilter, setCountryFilter] = useState('');
    
    const navigateToUser = useNavigate();

    const countries = [...new Set(users.map(user => user.location.country.toLowerCase()))] // remove doplicates from array, and we get new array by name countries that without duplicates
    
    const filtred = useMemo(() => {

        let result = users;

        // search by name;
        result = result.filter((user) => {
            return (user.name.first + ' ' + user.name.last).toLowerCase().includes(debounceSearch.toLowerCase())
        });

        // filter: Gender
        if(genderFilter !== ''){
            result = result.filter(user => user.gender === genderFilter)
        }

        if(countryFilter !== ''){
            result = result.filter(user => user.location.country.toLowerCase() === countryFilter.toLowerCase())
        }

        // sorts:
        result.sort((a,b) => {
            let comparison = 0;

            // age sort:
            if(ageSort === 'low'){
                comparison = a.dob.age - b.dob.age;
            } else if(ageSort === 'high'){
                comparison = b.dob.age - a.dob.age;
            }

            // name sort:
            if(comparison === 0){
                if(nameSort === 'az'){
                    comparison = a.name.first.localeCompare(b.name.first);
                } else if(nameSort === 'za'){
                    comparison = b.name.first.localeCompare(a.name.first);
                }
            }

            return comparison;
        });

        
        return result;
        
    }, [debounceSearch, users, ageSort, nameSort, genderFilter, countryFilter])
    
    const visibleUsers = filtred.slice(0, count)
    
    if(loading){
        return <p>Loading...</p>
    }

  return (
    <div>
         <select 
                disabled={nameSort}
                style={{
                    backgroundColor: ageSort ? 'lightblue' : 'white', 
                    border: 'none', 
                    marginRight: '8px',
                    padding: '8px',
                }}
                value={ageSort} 
                onChange={(e) => setAgeSort(e.target.value)}>
                    <option value="">All Ages</option>
                    <option value="low">Low → High</option>
                    <option value="high">High → Low</option>
            </select>
        
         <select
                disabled={ageSort}
                style={{
                    backgroundColor: nameSort ? 'lightblue' : 'white', 
                    border: 'none', 
                    marginRight: '8px',
                    padding: '8px',
                }}
                value={nameSort} 
                onChange={(e) => setNameSort(e.target.value)}>
                    <option value="">Default</option>
                    <option value="az">A → Z</option>
                    <option value="za">Z → A</option>
            </select>

            <select
                style={{
                    backgroundColor: genderFilter ? 'lightblue' : 'white', 
                    border: 'none', 
                    marginRight: '8px',
                    padding: '8px',
                }}
                value={genderFilter} 
                onChange={(e) => setGenderFilter(e.target.value)}>
                    <option value="">All Genders</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
            </select>

            <select
                style={{
                    backgroundColor: countryFilter ? 'lightblue' : 'white', 
                    border: 'none', 
                    marginRight: '8px',
                    padding: '8px',
                }}
                value={countryFilter} 
                onChange={(e) => setCountryFilter(e.target.value)}>
                    <option value="">All countries</option>
                    {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
            </select>

        <br />
        <br />
        {visibleUsers.map((user) => (
            <div key={user.login.uuid}>
                <img style={{borderRadius: '50%'}} src={user.picture.large}/>
                <h3>{user.name.first + ' ' + user.name.last}</h3>
                <p>Email: {user.email}</p>
                <p>Age: {user.dob.age}</p>
                <p>Country: {user.location.country}</p>
                <button onClick={() => selectHandle(user)}>Select User</button>
                <button onClick={() => navigateToUser(`/appusers/userprofile/${user.login.uuid}`)}>To The User</button>
                <hr />
            </div>
        ))}

        {count < filtred.length ? (<button onClick={() => setCount(count + 10)}>Load More</button>) : (<p>No More Users Found</p>)}
    </div>
  )
}

export default React.memo(UsersPageEx6)
