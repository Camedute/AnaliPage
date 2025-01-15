import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom"; // Importamos Link
import "./Registro.css";

type FormValues = {
    Usuario: string;
    email?: string;
    password: string;
    confirmPassword: string;
};

const Registro: React.FC = () => {
    const { register, formState: { errors }, watch, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            Usuario: 'Luis',
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h2>Formulario</h2>
            <p>Usuario: {watch('Usuario')}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Usuario</label>
                    <input
                        type="text"
                        {...register('Usuario', {
                            required: "El campo nombre es requerido",
                            maxLength: { value: 10, message: "El campo nombre debe tener menos de 10 caracteres" }
                        })}
                    />
                    {errors.Usuario && <p>{errors.Usuario.message}</p>}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        {...register('email', {
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                                message: "El formato del email es incorrecto"
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: "El campo contraseña es requerido",
                            minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" }
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <div>
                    <label>Confirmar Contraseña</label>
                    <input
                        type="password"
                        {...register('confirmPassword', {
                            required: "El campo confirmar contraseña es requerido",
                            validate: (value) => value === watch('password') || "Las contraseñas no coinciden"
                        })}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>

                <div>
                    <p>¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link></p>
                </div>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default Registro;

