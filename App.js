
import React, { Component } from "react";
import ContactCard from "./ContactCard";

import './App.css';

class App extends Component {
  render() {
    return (
      <> 
      <ContactCard name = "Baekhyun"
      mobile = "3471231235"
      work = "9179007653"
      email = "byunbaekhyun@gmail.com"
      />
      <ContactCard name = "Kai"
      mobile = "3475677788"
      work = "7187651267"
      email = "kimkai@gmail.com"
      />
      <ContactCard name = "Sehun"
      mobile = "9176325632"
      work = ""
      email = "sehunnieOh@gmail.com" 
      />
      </>
    )
  }
}

export default App;
