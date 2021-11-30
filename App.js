import React from 'react';
import Map from './components/Map';

import {  withScriptjs, withGoogleMap } from "react-google-maps";
import Form from './components/Form/Form';

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div style = {{width:'100vw', height:'100vh'}}>
      <WrappedMap 
        googleMapURL = {'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
        loadingElement = {<div style={{ height: `100%` }} />}
        containerElement = {<div style={{ height: `450px` }} />} 
        mapElement = {<div style={{ height: `100%` }} />} 
        />

        <Form>
           
        </Form>
      


    </div>
  );
}

export default App;
