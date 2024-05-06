import { IoEye } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TeachersRow = ({ teacher }) => {
  const { name, designation, email, phone, createdAt, id } = teacher;
  return (
    <tr>
      <th className="text-lg text-green-600">
        <button onClick={() => document.getElementById(`${id}`).showModal()}>
          <IoEye></IoEye>
        </button>
      </th>
      <td>{name}</td>
      <td>{designation}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{createdAt}</td>
      <td className="flex gap-4 text-lg">
        <div className="text-orange">
          <FaEdit></FaEdit>
        </div>
        <div className="text-red">
          <MdDelete></MdDelete>
        </div>
      </td>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Teacher Info</h3>
          <div className=" mt-4">
            <div className="flex justify-center">
              <img
                className="w-36 rounded-full"
                src="https://i.ibb.co/QP9JSNC/teacher-demo.jpg"
                alt="Teacher_Image"
              />
            </div>
            <h3 className="text-center mt-2 text-lg font-semibold">
              {name} ({designation})
            </h3>

            <div className="mt-2">
              <p>Email : {email}</p>
              <p>Phone : {phone}</p>
              <p>Created At : {createdAt}</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </tr>
  );
};

export default TeachersRow;
