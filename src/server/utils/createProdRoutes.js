var verify= require('../controllers/verify')

module.exports = function(controller , router){
    router.route('/')
    .get(verify.verifyOrdinaryUser, controller.get)
    .post(verify.verifyOrdinaryUser, controller.post)
    .delete(verify.verifyOrdinaryUser, controller.delete)

    router.route('/:id/images')
    .post(verify.verifyOrdinaryUser, controller.postImages)

    router.route('/:id/types')
    .post(verify.verifyOrdinaryUser, controller.postTypes)
    .get(controller.getTypes)
    .delete(verify.verifyOrdinaryUser, controller.deleteTypes)

    router.route('/:id/types/:typeId')
    .get(controller.getTypeId)
  
    router.route('/:id/types/:typeId/images')
    .post(verify.verifyOrdinaryUser, controller.addImageToType)

    router.route('/:id/types/:typeId/features')
    .post(verify.verifyOrdinaryUser, controller.addFeatureToType)

}