const keys = require("./keys");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const options = {
  secretOrKey: keys.secretKey,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
module.exports = (passport) => {
  // passport.use(
  //     new JwtStrategy(options,
  //     (jwt_payload,done)=>{
  //         //ADD HERE MODEL! .findById(jwt_payload.id)
  //         .then((user)=>{
  //             console.log("user found");
  //             return done(null,user)
  //         })
  //         .catch((error)=>{
  //             console.log(error);
  //             return done(error)
  //         })
  //     })
  // )
};
