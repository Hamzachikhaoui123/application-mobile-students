import axios from "axios";

// export const loginApi = (payload) =>axios.post('localhost/user/login', payload).then((res)=>res).catch((err)=>console.log("err",err));

// // export const loginApi = (payload) =>axios.post(`http:192.168.100.42/user/login`, payload).then((res)=>res).catch((err)=>console.log("err",err));



// // http:192.168.100.47
// // 192.168.100.42


export const loginApi =  ( payload) => {
    console.log("pa",payload);
    return new Promise((resolve, reject) => {fetch('http:192.168.198.116:3000/user/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: payload.email,
    password: payload.password,
  }),
}
).then((res)=>res.json()).then((res) => {
    resolve(res);
    console.log("res",res);
  }).catch((e) => console.log("error",e));
}
)
}