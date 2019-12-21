module.exports = {
  // url: process.env.DATABASE_URL,
  // host: 'ec2-174-129-254-226.compute-1.amazonaws.com',
  // database: 'dfjpcaaph2it73',
  // username: 'javzbehiqkpfkv',
  // password: 'f08de6b9c9e16038967d3b64d6263522d739f88d15b95e66dc85b970897c7ed1',

  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  },
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
};
