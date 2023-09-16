const { validators: { validateText, validateEmail, validatePassword }, errors: { DuplicityError } } = require('com')
const { User } = require('../data/models')

module.exports = function registerUser(username, email, password) {

    validateText(username)
    validateEmail(email)
    validatePassword(password)

    return User.create({
        username,
        email,
        password,
        avatar: 'https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=',
        likedPosts: [],
        savedPosts: []
    })
        .catch(error => {
            if (error.message.includes('E11000'))
                throw new DuplicityError(`user with email ${email} already exists`)

            throw error
        })
}