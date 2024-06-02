import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

// function AddCabins() {
//     const [isOpenModal, setIsOpenModal] = useState(false);
//     return (
//         <>
//         <Button onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>Add New Cabin</Button>
//         {isOpenModal && <Modal onClose={()=>setIsOpenModal(false)}>
//                 <CreateCabinForm onCloseModal={()=>setIsOpenModal(false)}/>
//             </Modal>}
//         </>
//     )
// }

function AddCabins() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button> Add new Cabin </Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabins;
