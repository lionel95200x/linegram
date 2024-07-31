'use client';

import { GetVoicesResponse } from 'elevenlabs/api';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';

const ConfigureAgentForm = ({
  voices,
  prompt,
  firstSentence,
  name,
  onSubmit,
}: {
  voices: GetVoicesResponse;
  prompt: string;
  firstSentence: string;
  name: string;
  onSubmit: (data: any) => void;
}) => {
  const defaultValues = {
    prompt,
    firstSentence,
    name,
    voiceId: voices.voices[0].voice_id,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((d) => {
        onSubmit(d);
      })}
    >
      <Card>
        <CardHeader>
          <CardTitle>Configurer mon agent</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p>Nom du bot</p>
            <Input type='text' {...register('name')} color='white' />
            {errors.name?.message && <p>{errors.name?.message}</p>}
          </div>
          <div>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Choisir une voix' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {voices.voices.map((voice) => (
                    <SelectItem key={voice.voice_id} value={voice.voice_id}>
                      {voice.name}
                    </SelectItem>
                  ))}
                  <SelectItem value='banana'>Mary</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='my-3'>
            <p>Premiere phrase du bot</p>

            <Input type='text' {...register('firstSentence')} />
            {errors.firstSentence?.message && <p>{errors.firstSentence?.message}</p>}
          </div>

          <Label htmlFor='message-2'>Description de l&apos;agent</Label>
          <Textarea {...register('prompt')} placeholder='Type your message here.' id='prompt' name='prompt' />
          {errors.prompt?.message && <p>{errors.prompt?.message}</p>}

          <p className='text-sm text-muted-foreground'>
            Vous pouvez configurez votre agent ici, son style d&apos;écriture, sa personnalité.
          </p>
        </CardContent>
        <CardFooter>
          <Button type='submit'>Enregistrer</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ConfigureAgentForm;
