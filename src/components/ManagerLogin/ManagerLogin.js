import React, { useState, useEffect, Component } from 'react';
import './ManagerLogin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

  import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie'


  const ManagerLogin = () =>{

    const layout = {
        labelCol: {
          span: 0,
        },
        wrapperCol: {
          span: 12,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 7,
          span: 10,
        },
      };
      
      const[validation,setvalidation] = useState(false);
      const[errorMsg,seterrorMsg] = useState(false);
      

      const onFinish = values => {
        console.log('Success:', values);
        const username = values.username;
        const password = values.password;
        console.log(document.cookie);
        if(Cookies.get('username') !== undefined || Cookies.get('password') !== undefined){
          values.username = document.querySelector('#idUsername').value;
          values.username = document.querySelector('#idPassword').value;
          console.log(document.querySelector('#idPassword').value);
        }
        if(values.remember === true){

          Cookies.set('username',values.username,{ expires: 1 });
          Cookies.set('password',values.password,{ expires: 1 });

        }
        const data = JSON.stringify({username : values.username, password : values.password});
        axios.post('http://localhost:8000/products/login',data,
        {params: {
          username,
          password
        }, headers: { "Content-Type": "text/plain" } })
        .then((res)=>{if(res.data === true){
            setvalidation(true)
          }
          else{
            seterrorMsg(true)
            console.log('password or username incorrect')
          ;}})

      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    
    

    return(

     
        <div className = "managerLoginContainer">

          {/* {remmberUser && <Redirect to = '/managerpage'/>} */}
           
            <div className = 'loginInputs'>
              
            <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input id = 'idUsername' type="text" defaultValue = {Cookies.get('username') !== undefined ?Cookies.get('username') : null }   />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password id = 'idPassword' type="text" defaultValue = {Cookies.get('password') !== undefined ?Cookies.get('password') : null }  />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>



      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
      {errorMsg && <h3 style = {{color : 'red'}}>password or username are incorrect</h3>}
      {validation === true ? <Redirect push to="/managerpage"/> :null}



    </Form>

            </div>
            <div className = 'loginHeader'>
              <h1>Manager Log in page</h1>
              <h4></h4>
              <Link to = "/">back to shop</Link>
            </div>


            
        </div>
    )
  }

  export default ManagerLogin;