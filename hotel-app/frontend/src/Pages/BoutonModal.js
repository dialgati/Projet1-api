import { HiPlusSmall } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";
import { SlPicture } from "react-icons/sl";

function BoutonModal() {
  //  const [image, setImage] = useState(null);

  //  const handleImageChange = (e) => {
  //    setImage(e.target.files[0]);
  //  };

  //  const handleUpload = async () => {
  //    try {
  //      const formData = new FormData();
  //      formData.append("image", image);

  //      await axios.post("http://localhost:8080/hotels/upload", formData, {
  //        headers: {
  //          "Content-Type": "multipart/form-data",
  //        },
  //      });

  //      console.log("Image uploaded successfully");
  //    } catch (error) {
  //      console.error("Error uploading image: ", error);
  //    }
  //  };

  return (
    <div>
      <button
        className="border border-secondary bg-white p-2 rounded-4"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        <HiPlusSmall className="me-2 fs-2" />
        Créer un nouveau hotel
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div class="modal-dialog modal-lg ">
              <div class="modal-content py-5">
                <div class=" d-flex justify-content-start ms-3">
                  <Link
                    type="button"
                    class="text-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <IoArrowBackOutline className="fs-4 me-2" />
                  </Link>
                  <p
                    class="modal-title fs-5 text-uppercase"
                    id="exampleModalLabel"
                  >
                    Créer un nouveau hotel
                  </p>
                </div>
                <div class="modal-body">
                  <div className="tiret"></div>
                  <form className="mx-4">
                    <div class="d-flex gap-2">
                      <div className="col-6">
                        <label for="recipient-name" class="col-form-label">
                          Nom de l'hotel
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="col-6">
                        <label for="recipient-name" class="col-form-label">
                          Adresse
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                        />
                      </div>
                    </div>
                    <div class="d-flex gap-2">
                      <div className="col-6">
                        <label for="recipient-name" class="col-form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="col-6">
                        <label for="recipient-name" class="col-form-label">
                          Numero de telephone
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                        />
                      </div>
                    </div>
                    <div class="d-flex gap-2">
                      <div className="col-6">
                        <label for="recipient-name" class="col-form-label">
                          Prix par nuit
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="col-6">
                        <label for="recipient-name" class="col-form-label">
                          Devise
                        </label>
                        <select class="form-select" id="inlineFormSelectPref">
                          <option value="1">F XOF</option>
                          <option value="2">Euro</option>
                          <option value="3">Dollar</option>
                        </select>
                      </div>
                    </div>
                    <p className="mt-2">Ajouter une image </p>
                    <div className="border p-3">
                      <input type="file" />
                      <Link >Upload Image</Link>
                      <SlPicture />
                    </div>
                  </form>
                </div>
                <div class="modal-footer border-0">
                  <button type="button" class="btn gris">
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoutonModal;