import React from 'react'
import Title from '../components/Title'
import AllServiceSection from '../components/AllServiceSection'
import JoinSection from '../components/JoinSection'

const Services = () => {
  return (
    <>
      <Title
        para1={"Our Services"}
        title={"Fitness,Recovery & Lifestyle — All in One Place"}
        para2={
          "Train harder, recover better, and enjoy added convenience with our gym, personal training, cafe, and salon services—all designed to support your health, wellness, and lifestyle."
        }
      />
      <AllServiceSection/>
      <JoinSection/>
    </>
  )
}

export default Services