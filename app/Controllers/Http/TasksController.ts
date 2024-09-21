import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Task from 'App/Models/Task'
export default class TasksController {
    public async index({auth}: HttpContextContract){
        const user = await auth.authenticate()
        user.load('tasks')
        return user 
    }
}
