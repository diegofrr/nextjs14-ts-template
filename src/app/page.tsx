import { useState } from 'react';
import type { ReduxState } from '../interfaces/ReduxState';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@/store/modules/auth/reducer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { toast } from 'sonner';
import { useTheme } from '@/hooks';

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Nome muito curto' })
    .max(20, { message: 'Nome muito longo' })
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Não é permitido números.' }),
});

export default function Home() {
  const [nome, setNome] = useState<string>('');
  const [error, setError] = useState<z.ZodError>();

  const { user } = useSelector((state: ReduxState) => state.authReducer);
  const { toggleTheme, anotherTheme } = useTheme();

  const dispatch = useDispatch();

  const handleSetName = () => {
    toast.success('Nome alterado com sucesso!');
    if (error) return;
    dispatch(actions.setUsername(nome));
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const result = userSchema.safeParse({ name: value });

    if (result.success) setError(undefined);
    else setError(result.error);

    setNome(value);
  };

  return (
    <main className="flex h-dvh w-dvw flex-col items-center justify-center gap-2">
      <h1>{user.name}</h1>

      <Input
        value={nome}
        type="text"
        onChange={handleChangeInput}
        placeholder="Nome"
        className="max-w-64"
      />

      {nome && (
        <div className="flex w-64 flex-col gap-1 text-sm text-destructive">
          {error?.errors.map((err) => <p key={err.message}>{err.message}</p>)}
        </div>
      )}

      <Button disabled={!!error || !nome} onClick={handleSetName}>
        Alterar nome
      </Button>

      <Button className="italic" onClick={toggleTheme}>
        Alterar tema para {anotherTheme}
      </Button>
    </main>
  );
}
