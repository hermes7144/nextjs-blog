'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import Banner, { BannerData } from './Banner';

export default function ContactForm() {
  const [form, setForm] = useState<Form>({ from: '', subject: '', message: '' });

  const [banner, setBanner] = useState<BannerData | null>(null);
  type Form = {
    from: string;
    subject: string;
    message: string;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBanner({ message: '성공했어!!', state: 'success' });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className='w-full max-w-md'>
      {banner && <Banner banner={banner} />}
      <form className='flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white' onSubmit={handleSubmit}>
        <label htmlFor='from' className='semibold'>
          Your Email
        </label>
        <input type='email' id='from' name='from' onChange={onChange} required autoFocus value={form.from} />
        <label htmlFor='subject' className='semibold'>
          Subject
        </label>
        <input type='text' id='subject' name='subject' onChange={onChange} required value={form.subject} />
        <label htmlFor='message' className='semibold'>
          Message
        </label>
        <textarea rows={10} id='message' name='message' onChange={onChange} required value={form.message} className='text-black'></textarea>
        <button className='bg-yellow-300 text-black font-bold hover:bg-yellow-400 rounded-xl py-1 px-4 mt-2'>Submit</button>
      </form>
    </section>
  );
}
