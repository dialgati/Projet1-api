import {useState} from "react";
import logo from '../images/logo .png'
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";

function Inscription() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleChange = ({ currentTarget:input}) => {
    setData({...data, [input.name]:input.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const url = "http://localhost:8080/api/users";
      const {data:res} = await axios.post(url, data);
      navigate("/connexion")
      console.log(res.message);
    } catch(error){
      if(error.response &&
         error.response.status >= 400 &&
         error.response.status <= 500
         ){
          setError(error.reponse.data.message)
         }
    }
  }
  return (
    <div className="inscription ">
      <div className="reduire">
        <div className="text-center">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        <div className="container  w-50">
          <div className="row justify-content-center">
            <form
              className="col-md-6 mt-4 bg-white center shadow-3 p-3 rounded-1"
              onSubmit={handleSubmit}
            >
              <h5 className="mb-3">Inscrivez en tant que admin</h5>
              <div className="mb-3">
                <input
                  type="text"
                  name="firstName"
                  required
                  onChange={handleChange}
                  value={data.firstName}
                  className="form-control border-0"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="lastName"
                  required
                  onChange={handleChange}
                  value={data.lastName}
                  className="form-control border-0"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={data.email}
                  className="form-control border-0"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                  value={data.password}
                  className="form-control border-0"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Accepter les termes et la politique
                </label>
              </div>
              {error && <div className="text-danger">{error}</div>}
              <button type="submit" className="btn gris w-100">
                S'inscrire
              </button>
            </form>
            <p className="text-center text-white mt-3">
              Vous avaez déjà un compte?
              <Link
                to="/connexion"
                className="text-decoration-none text-warning"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;

//    const [name, setName] = useState();
//    const [email, setEmail] = useState();
//    const [password, setPassword] = useState();
//    const navigate = useNavigate ()
//   const handleSubmit = (e) => {
//     e.preventDefault()
// axios.post(
//     "mongodb+srv://jahreuf:Djilo13dia@app-test.1kg1yqb.mongodb.net/register",
//     {
//       name,
//       email,
//       password,
//     }
//   )
//   .then((result) => 
//     console.log(result)
//   )
//   .catch((err) => console.log(err));

