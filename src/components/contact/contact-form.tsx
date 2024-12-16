import Image from "next/image"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Input from "../common/input/input"
import TextArea from "../common/input/textarea"
import Button from "../common/button"
import egg from '../../../public/egg.png'

interface ContactInputs {
  name: string
  email: string
  message: string
  publisher: string
}

const HeroContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactInputs>()

  const onSubmit: SubmitHandler<ContactInputs> = async (data) => {
    setIsLoading(true)
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        setIsSuccess(true)
      })
      .catch((err) => {
        setErrorMessage('Failed to send message. Please try again later.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return isSuccess ? (
    <div className='text-green-500'>Message sent successfully!</div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 relative'>
      {isLoading && (
        <div className='w-full h-full bg-gray-200/60 absolute flex items-center justify-center'>
          <Image src={egg} alt="Egg" height={80} className="absolute animate-bounce" />
        </div>
      )}
      {errorMessage && (
        <div className='text-red-500'>{errorMessage}</div>
      )}
      <div className='flex w-full gap-4'>
        <Input
          label='Nama'
          type='text'
          placeholder='e.g. John Doe'
          className='flex-1'
          useFormRegister={register("name", { required: true })}
          errorMessage={errors.name?.message}
        />
        <Input
          label='Email'
          type='email'
          placeholder='e.g. johndoe@example.com'
          className='flex-1'
          useFormRegister={register("email", { required: true })}
          errorMessage={errors.email?.message}
        />
      </div>
      <Input
        label='Game Studio/Publisher'
        type='text'
        placeholder='e.g. My Game & Co.'
        className='flex-1'
        useFormRegister={register("publisher", { required: true })}
        errorMessage={errors.email?.message}
      />
      <TextArea
        label='Pesan Anda'
        placeholder='Masukkan pesan anda disini...'
        rows={5}
        useFormRegister={register("message", { required: true })}
        errorMessage={errors.message?.message}
      />
      <Button
        enableAnimation={false}
        buttonType='button'
      >
        Kirim Pesan
      </Button>
    </form>
  )
}

export default HeroContactForm