import React, { useState } from "react";
import { Modal, Form } from "antd";

const Register: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  return (
    <>
      <button
        className="bg-[#041653] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        onClick={showModal}>
        Register
      </button>
      <Modal
        width={700}
        open={open}
        title="Registration"
        onCancel={handleCancel}
        footer={null}>
        <section className="scrollbar-hide">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdpVcbdESVXsTx6REP1vKqCJwKloKeaCvKImh4hYBIeAQrUDg/viewform?embedded=true"
            width="640"
            height="900">
            Loading…
          </iframe>
        </section>
      </Modal>
    </>
  );
};

export default Register;
