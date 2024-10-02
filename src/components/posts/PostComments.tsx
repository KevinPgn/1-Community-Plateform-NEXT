"use client"
import React from 'react'
import { Textarea } from '../ui/textarea'
import {useForm} from 'react-hook-form'
import { createComment } from './actionPost.action'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const PostComments = ({postId}: {postId: string}) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data: any) => {
   try{
    const comment = await createComment({postId, ...data})
    console.log(comment)
    toast.success("Comment created")
   } catch(error) {
    toast.error("Error creating comment")
   }
  }

  return <form className='flex items-center gap-2 mt-5' onSubmit={handleSubmit(onSubmit)}>
      <Textarea {...register("content")} className='w-full h-14 bg-transparent dark:border-zinc-800 border-zinc-200 border' placeholder='Add a comment'/>
      <Button type="submit" variant='ghost' className='dark:border-zinc-800 border-zinc-200 border hover:dark:bg-zinc-800 hover:bg-zinc-200 transition-all duration-300'>
        <Send size={19} />
      </Button>

      <ToastContainer />
    </form>
}