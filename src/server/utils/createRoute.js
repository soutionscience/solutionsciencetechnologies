const verify = require('../controllers/verify')
module.exports = function(controller , router){
    router.route('/')
    .get(controller.get)
    .post(controller.post)
    .delete(verify.verifyOrdinaryUser, controller.delete)

    router.route('/:id/images')
    .post(verify.verifyOrdinaryUser, controller.postImages)

    // router.route(':/id/types')
    // .post(controller.postTypes)
}