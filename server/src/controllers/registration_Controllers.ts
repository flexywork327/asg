import { Registration } from '../models/register_Model';
import { dataBase_Connection_Helper } from '../utils/database_Connection';
import { sendHtmlEmail } from '../utils/emails';
import registerValidators from '../validators/register_Validator';
const RegistrationModel = dataBase_Connection_Helper(Registration);

// TODO: =================================================================== REGISTER ===================================================================
// @route POST /cars/details
// @desc  Get car details
// @access private

const add = async (req: any, res: any) => {
  const { error, value } = registerValidators.add.validate(req.body);
  if (error) {
    return res.json({ status: 400, message: error.details[0].message });
  }
  try {
    const item = await RegistrationModel.save(value);

    // send email
    const emailBody = `Email: ${value.email}\nFull Name: ${value.full_name}\nOrganization: ${value.organization}\nStatus: ${value.status}\nRegister Fee: ${value.registerFee}`;

    console.log('emailBody', emailBody);
    sendHtmlEmail(`${value.email}`, 'New Registration', emailBody);

    return res.json({
      status: 200,
      message: 'Data saved successfully',
      info: item,
    });
  } catch (err: any) {
    return res.json({ status: 500, message: err.message });
  }
};

// TODO: =================================================================== GET ALL ===================================================================
// @route GET /cars/details
// @desc  Get car details
// @access private
const getAll = async (req: any, res: any) => {
  try {
    const items = await RegistrationModel.find();
    return res.json({
      status: 200,
      message: 'Data fetched successfully',
      info: items,
    });
  } catch (err: any) {
    return res.json({ status: 500, message: err.message });
  }
};

export const registrationControllers = {
  add,
  getAll,
};
