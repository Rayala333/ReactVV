import React,{useState} from 'react'

const Country = () => {

    const [state,setState] = useState()

    const [dst,setDst] = useState()

    const [Pincode,setPincode] = useState()

    const [Distict,setDistict]=useState()

    console.log(dst,'dst')

    const [mydata,setData]=useState('')

   console.log(mydata,"mydata")

    const data = {

        "country":[

          {

            "CountryName": "India",

            "id": 1

          },

          {

            "CountryName": "USA",

            "id": 2

          },

        ],

        "states":[

            {

              "StateName": "Telangana",

              "CountryName":"India",

              "StdCode":"TG",

              "id": 1

            },

            {

              "StateName": "Andhra Pradesh",

              "CountryName":"India",

              "StdCode":"AP",

              "id": 2

            },

            {

              "StateName": "Tamila Nadu",

              "CountryName":"India",

              "StdCode":"TN",

              "id": 3

            },

            {

              "StateName": "Maharashtra",

              "CountryName":"India",

              "StdCode":"MH",

              "id": 4

            },

     

          ],

   

        "distict":[

            {

              "distictName": "kmm",

              "StateName":"Telangana",

              "id": 1

            },

            {

              "distictName": "Hyd",

              "StateName":"Telangana",

              "id": 2

            },

            {

              "distictName": "Vja",

              "StateName":"Andhra Pradesh",

              "id": 3

            },

            {

              "distictName": "kdapa",

              "StateName":"Andhra Pradesh",

              "id": 4

            },

            {

                "distictName": "dst-1",

                "StateName":"Tamila Nadu",

                "id": 5

              },

              {

                "distictName": "dst-2",

                "StateName":"Tamila Nadu",

                "id": 5

              },

          ],

      }




      const hanleCountry = (e)=>{

        const getCountry = e.target.value;

        console.log(getCountry)

        setState(getCountry)

    }

    const statedata = data.states.filter((e,i)=>{

        return e.CountryName===state

      })

      const hanleState = (e)=>{

        const getState = e.target.value;

        console.log(getState)

        setDst(getState)

      }

      const distictData = data.distict.filter((e,i)=>{

       

        return e.StateName===dst

      })

      const changepin = (e)=>{
        // setPincode( {...Pincode,[e.target.name]:[e.target.value]})
        setPincode(e.target.value)
      }

      const handleDistict = (e)=>{

        setDistict(e.target.value)

        // console.log(e.target.value,"DST")

      }

      console.log(Pincode)

      const submitHandler = (e)=>{

        e.preventDefault()
        let pin = /^[56]\d{0,5}$/
        if(!Pincode){

            alert("enter pincode")

        }else if(pin.test(Pincode)){

                alert("enter valied pincode")

                console.log("enter valied pincode")

        }else{

            alert(Pincode)

            const fomdata = {

                pincode:Pincode,

                country:state,

                state:dst,

                distict:Distict

            }

            setData(fomdata)

        }

      }

  return (

    <div>
    <form className='form' onSubmit={submitHandler}>
    <select class="form-select form-select-lg mb-3" onChange={hanleCountry} >
        <option>--Select Country--</option>
        {

            data.country.map((e,i)=>(

              <option key={i} value={e.CountryName}>{e.CountryName}</option>

            ))

          }
    </select>

    <select class="form-select form-select-lg mb-3" onChange={hanleState}>

        <option>--Select State--</option>

        {

        statedata.map((e,i)=>(

            <option key={i} value={e.StateName}>{e.StateName}</option>

        ))

        }

    </select>

    <select class="form-select form-select-lg mb-3" onChange={handleDistict} >

        <option>Distict</option>

        {

            distictData.map((e,i)=>(

                <option key={i} value={e.distictName}>{e.distictName}</option>

            ))

            }

    </select>




    <input type="text" class="form-control mb-3"  placeholder="Pine_Code" name='Pincode' onChange={changepin} 
      ></input>




    <button className='btn btn-primary mb-3' >Submit</button>

</form>




    <div>

     <p>{mydata.country}</p>

     <p>{mydata.state}</p>

     <p>{mydata.distict}</p>

     <p>{mydata.pincode}</p>

    </div>

   

    </div>

  )

}




export default Country