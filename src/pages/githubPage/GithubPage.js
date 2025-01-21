import React, { useEffect, useState } from 'react'

function GithubPage() {

const[githubData ,setGithubData] = useState('')
// console.log(githubData);


useEffect (()=>{
     setApiData()
},[])

  const setApiData = async()=>{
    const response = await  fetch('https://api.github.com/users/hiteshchoudhary')

    if(response.ok){
    const data = await response.json()
    setGithubData(data)
    }else{
      alert("error")
      
    }
  }

  return (
    <div className='text-center'>
      {/* <h1>github page</h1> */}
      <h2>Name: {githubData.name}</h2>
      <img  className='w-25' src={githubData.avatar_url} alt=""/>


    </div>
  )
}

export default GithubPage