const AppDataSources = require('../config/data-source');

export const dataBase_Connection_Helper = (entity: any) => {
  return AppDataSources.getRepository(entity);
};
