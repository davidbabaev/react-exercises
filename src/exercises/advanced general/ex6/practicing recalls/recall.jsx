import React, { useMemo, useState } from 'react'
import useUsersEx6 from './hooks/useUsersEx6';

export default function recall() {

    const [count, setCount] = useState(10);
    
    const {users} = useUsersEx6();

    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');

    const [age, setAge] = useState('');
    const [az, setAz] = useState('');

    const countries = [...new Set(users.map(user => user.location.country))]

    const filtred = useMemo(() => {
        let newUsers = users;


        // filter handling
        if(gender !== ''){
            newUsers = newUsers.filter((user) => {
                return user.gender === gender
            }
        )}

        if(country !== ''){
            newUsers = newUsers.filter((user) => {
                return user.location.country === country;
            }
        )}

        newUsers.sort((a,b) => {

            let comparison = 0;

            if(age === 'low'){
                comparison = a.dob.age - b.dob.age;
            }

            if(age === 'high'){
                comparison = b.dob.age - a.dob.age;
            }

            if(comparison === 0){
                // use name to break the tie,
                // if we have two users with age 25, we will sort them we the a-z logic,
                // use name to break the tie
                if(az === 'az'){
                    comparison = a.name.first.localeCompare(b.name.first)
                }
                if(az === 'za'){
                    comparison = b.name.first.localeCompare(a.name.first)
                }
            }

            return comparison;
        });

        const loadMore = newUsers.slice(0, count);

        return loadMore;
    }, [gender, country, age, az, users, count])

  return (
    <div>
        {/* Age */}
        <select value={age} onChange={(e) => setAge(e.target.value)}>
            <option value="">all</option>
            <option value="low">low</option>
            <option value="high">high</option>
        </select>

        {/* a-z */}
        <select value={az} onChange={(e) => setAz(e.target.value)}>
            <option value="">all</option>
            <option value="az">a-z</option>
            <option value="za">z-a</option>
        </select>

        {/* gender */}
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">all</option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>

        {/* country */}
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">all</option>
            {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
            ))}
        </select>

        {filtred.map((user) => (
            <div key= {user.login.uuid}>
                <p>{user.name.first}</p>
            </div>
        ))}
        <button onClick={() => setCount(count + 10)}>Load More</button>
    </div>
  )
}


// Think back — in your original code, did you create separate functions inside useMemo? Or did you just write the filter logic directly?
// i'm not sure, it think we did function.


// 



//   "results" = [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Laura",
//         "last": "Woods"
//       },
//       "location": {
//         "street": {
//           "number": 2479,
//           "name": "Henry Street"
//         },
//         "city": "Blessington",
//         "state": "Wexford",
//         "country": "Ireland",
//         "postcode": 78276,
//         "coordinates": {
//           "latitude": "2.0565",
//           "longitude": "95.2422"
//         },
//         "timezone": {
//           "offset": "+1:00",
//           "description": "Brussels, Copenhagen, Madrid, Paris"
//         }
     
//         }
//     },
//     ]


            // i'm not sure that i remember how to use the filter logic, is that inside a funtion, 
        // forgot the syntax
        // also i'm not sure what do we need to filter?
        // we need to use if() logics with cahcking the string state for using the filter, i'm cunfusing the if need to be inside the filter or we do if and inside the if we will do filter.
        // we need to check the gender between our state and out api user gender.




        // why are we need comparison?
        // Negative -> a comes first
        // Positive -> b comes first

        // this never changes

        // I was showing that sort() compares users in different orders as it works through the array.
        // Round 1: a = Avi (25), b = Ben (30)
        // a - b = 25 - 30 = -5 → negative → a comes first → Avi (25) first ✓
        // Round 2: a = Ben (30), b = Avi (25)
        // a - b = 30 - 25 = +5 → positive → b comes first → Avi (25) first ✓
        // Same result! Avi (25) always ends up first. The formula a - b handles both situations automatically.
        // this is how sort logic work you don't need to understand how javaScript work you need to know how the method work and how to use it.

        // The only thing you change is the formula:
        // Want youngest first? → a.dob.age - b.dob.age
        // Want oldest first? → b.dob.age - a.dob.age



        // comparison logic:
        // if (age === 'low') {
        // comparison = a.dob.age - b.dob.age;  // ✓ This runs
        // }
        // this is useful when you have multi-level sorting (primary + tiebreaker). since you ui only aloows one sort at a time.


                    // Age sort: 25 - 30 = -5 → comparison = -5
            // if(comparison === 0) -> false (it's -5, not 0)
            // skip name sort
            // return -5 -> avi first

            // so the comparison is not have the respossibilty to unable usings both sorts together, i mean if the user choosing a-z, the age select will do nothing, not will sort, but if the a-z will be empty, the age sort will be possible

            // the comparison is for handle the tie logic only.

            // what stop the scond sort if the first in on,

            // With if (comparison === 0):
            // Both sorts work together — age first, name only for ties.
            // Without if (comparison === 0):
            // Only the last sort wins — it erases the previous one.

            // So you're right: it still "works" with one sort. But if both are active, one just deletes the other's work.