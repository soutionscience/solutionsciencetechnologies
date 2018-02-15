module.exports = function(controller , router){
    router.route('/')
    .get(controller.get)
    .post(controller.post)
    .delete(controller.delete)

    router.route('/:id/images')
    .post(controller.postImages)

    router.route('/:id/types')
    .post(controller.postTypes)
    .get(controller.getTypes)
    .delete(controller.deleteTypes)


}