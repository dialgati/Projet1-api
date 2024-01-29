import {useState} from "react";
import axios from "axios";
import logo from "../images/logo .png";
import {Link} from 'react-router-dom';

function Connexion() {
   const [data, setData] = useState({
     email: "",
     password: ""
   });
   const [error, setError] = useState("");
   const handleChange = ({ currentTarget: input }) => {
     setData({ ...data, [input.name]: input.value });
   };
   const handleSubmit = async (e) => {
     e.preventDefault();
     console.log(data);
     try {
// // Autres routes CRUD...
       const url = "http://localhost:8080/api/auth";
       const { data: res } = await axios.post(url, data);
       localStorage.setItem("token", res.data);
       window.location = "/"
     } catch (error) {
       if (
         error.response &&
         error.response.status >= 400 &&
         error.response.status <= 500
       ) {
         setError(error.response.data.message);
       }
     }
   };
  //  const [email, setEmail] = useState();
  //  const [password, setPassword] = useState();
  //  const navigate = useNavigate();
  //  const handleSubmit = (e) => {
  //    e.preventDefault();
  //    axios
  //      .post(
  //        "mongodb+srv://jahreuf:Djilo13dia@app-test.1kg1yqb.mongodb.net/connexion",
  //        {
  //          email,
  //          password,
  //        }
  //      )
  //      .then((result) => {
  //        console.log(result);
  //        navigate("/admin/Dashboard");
  //      })
  //      .catch((err) => console.log(err));
  //  };
  return (
    <div className="inscription ">
      <div className="bas">
        <div className="text-center">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        <div className="container  w-50">
          <div className="row justify-content-center">
            <form
              className="col-md-6 mt-4 bg-white center shadow-3 p-3 rounded-1"
              onSubmit={handleSubmit}
            >
              <h5 className="mb-3">Connectez en tant que admin</h5>
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
                <input
                  type="checkbox"
                  className="form-check-input fs-5"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Accepter les termes et la politique
                </label>
              </div>
              {error && <div className="text-danger">{error}</div>}
              <button type="submit" className="btn gris w-100">
                Se connecter
              </button>
            </form>
            <p className="text-center text-white mt-3">
              Vous n'avaez pas de compte?
              <Link
                to="/inscription"
                className="text-decoration-none text-warning"
              >
                Inscrivez-vous ici
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
