import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, message } from "antd";
import axios from "axios";

const { Option } = Select;

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

  const handleStatusChange = (value: string) => {
    const fees = {
      "ASG Member": "250",
      "Non-Member": "500",
      Students: "150",
      Academic: "200",
    };
    form.setFieldsValue({
      registerFee: fees[value as keyof typeof fees] || "",
    });
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values:", values);

        // Send email with form data
        const emailBody = `
          Email: ${values.email}
          Full Name: ${values.fullName}
          Organization: ${values.organization}
          Status: ${values.status}
          ${
            values.status === "ASG Member"
              ? `ASG Member ID: ${values.asg_member}`
              : ""
          }
          Register Fee: ${values.registerFee}
        `;

        // In a real application, you would use a backend API to send emails
        // This is a placeholder to simulate sending an email
        console.log("Sending email to info@asg.org.gh");
        console.log("Email body:", emailBody);

        axios
          .post("https://api.example.com/send-email", {
            to: "info@asg.org.gh",
            subject: "Registration Confirmation",
            body: emailBody,
          })
          .then((response) => {
            console.log("Email sent:", response.data);
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });

        // Show success message
        message.success("Registration submitted successfully!");

        setOpen(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <>
      <button
        className="bg-[#041653] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        onClick={showModal}>
        Register
      </button>
      <Modal
        open={open}
        title="Registration"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}>
        <Form
          form={form}
          layout="vertical"
          name="registration_form"
          initialValues={{ status: undefined, registerFee: "" }}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email address!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="organization"
            label="Organization"
            rules={[
              { required: true, message: "Please input your organization!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select your status!" }]}>
            <Select onChange={handleStatusChange}>
              <Option value="ASG Member">ASG Member</Option>
              <Option value="Non-Member">Non-Member</Option>
              <Option value="Students">Students</Option>
              <Option value="Academic">Academic</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.status !== currentValues.status
            }>
            {({ getFieldValue }) =>
              getFieldValue("status") === "ASG Member" ? (
                <Form.Item
                  name="asg_member"
                  label="ASG Member ID"
                  rules={[
                    {
                      required: true,
                      message: "Please input your ASG Member ID!",
                    },
                  ]}>
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item name="registerFee" label="Register Fee">
            <Input readOnly />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Register;
