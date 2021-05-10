  
// import { useEffect, useState } from "react";
// import Modal from "./UI/Modal/Modal";
// import axios from "../axios";

// const withAxios = (WrappedComponent, axios) => {
//   return (props) => {
//     const [error, setError] = useState(null);

//     function hideError() {
//       setError(false);
//     }

//     const requestInterceptor = axios.interceptors.request.use((request) => {
//       setError(false);
//       return request;
//     });
//     const responseInterceptor = axios.interceptors.response.use(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         setError(error);
//         return Promise.reject(error);
//       }
//     );

//     useEffect(() => {
//       return () => {
//         axios.interceptors.request.eject(requestInterceptor);
//         axios.interceptors.response.eject(responseInterceptor);
//       };
//     }, [requestInterceptor, responseInterceptor]);

//     return (
//       <>
//         <Modal show={error} cancel={hideError}>
//           {error ? error.message : "Unknown error"}
//         </Modal>
//         <WrappedComponent {...props} />
//       </>
//     );
//   }
// }

// export default withAxios; 




import { useEffect, useState } from "react";
import Modal from "./UI/Modal/Modal";

const withAxios = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    function hideError() {
      setError(false);
    }

    const requestInterceptor = axios.interceptors.request.use((request) => {
      setError(false);
      return request;
    });
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        setError(error);
        return Promise.reject(error);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor]);

    return (
      <>
        <Modal show={error} cancel={hideError}>
          {error ? error.message : "Unknown error"}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  }
}

export default withAxios;