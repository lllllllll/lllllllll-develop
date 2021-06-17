import React from 'react'
import { ShoppingBag, Search, Upload } from 'react-feather'

import { Calendar, Card, Header, Icon, Profile, User } from '../helper'

const Elements = () =>  {
  return (
    <section className="elements">
      <h1 className="title">Ex: Ui Elements 🚀</h1>
      <div className="container mb-1">
        <Header />
      </div>
      <div className="container mb-1">
        <Calendar />
      </div>
      <div className="container mb-1">
        <div className="row">
          <div className="col-3">
            <User />
          </div>
          <div className="col">
            <Icon data={<ShoppingBag />} />
          </div>
          <div className="col">
            <Icon data={<Search />} />
          </div>
          <div className="col">
            <Icon data={<Upload />} />
          </div>
        </div>
      </div>
      <div className="container mb-1">
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Profile />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Elements
