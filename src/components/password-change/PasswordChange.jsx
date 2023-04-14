import React, { useState } from 'react';
import "./passwordChange.css";

function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar que las contraseñas coincidan
    if (newPassword !== confirmNewPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    // Aquí podrías enviar los datos del formulario a través de una petición HTTP
    console.log('Contraseña actual:', currentPassword);
    console.log('Nueva contraseña:', newPassword);
    console.log('Confirmación de nueva contraseña:', confirmNewPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="current-password-input">
        Contraseña actual:
        <input
          id="current-password-input"
          type="password"
          value={currentPassword}
          onChange={(event) => setCurrentPassword(event.target.value)}
        />
      </label>
      <label htmlFor="new-password-input">
        Nueva contraseña:
        <input
          id="new-password-input"
          type="password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
      </label>
      <label htmlFor="confirm-new-password-input">
        Confirmar nueva contraseña:
        <input
          id="confirm-new-password-input"
          type="password"
          value={confirmNewPassword}
          onChange={(event) => setConfirmNewPassword(event.target.value)}
        />
      </label>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button type="submit">Cambiar contraseña</button>
    </form>
  );
}


 
<<<<<<< HEAD
export default ChangePasswordForm;

=======
export default ChangePasswordForm;
>>>>>>> origin/unificar
