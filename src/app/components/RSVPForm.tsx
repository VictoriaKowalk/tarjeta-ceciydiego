import { useState } from "react";
import { useForm } from "react-hook-form";
import type { GuestInfo } from "../data/getGuestFromUrl";

interface RSVPFormProps {
  formUrl: string;
  guestInfo: GuestInfo;
}

type RSVPValues = {
  name: string;
  attending: "yes" | "no";
  count: string;
  companions: string;
  diet: string;
  message: string;
};

export function RSVPForm({ formUrl, guestInfo }: RSVPFormProps) {
  const { register, handleSubmit, watch } = useForm<RSVPValues>({
    defaultValues: {
      name: guestInfo.guestName,
      count: String(Math.min(guestInfo.reservedSeats, 5)),
    },
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
    window.open(formUrl, "_blank", "noopener,noreferrer");
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#D8C7B3]/30 text-center">
        <h3 className="text-2xl font-display text-[#3A3632] mb-2">Gracias por confirmar</h3>
        <p className="text-[#8B837C] font-sans text-sm">
          Te abrimos el formulario externo para completar el envio.
        </p>
      </div>
    );
  }

  const availableSeats = Array.from({ length: guestInfo.reservedSeats }, (_, index) => index + 1);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 sm:p-10 rounded-3xl shadow-[0_4px_24px_rgba(58,54,50,0.03)] border border-[#D8C7B3]/20 w-full max-w-md mx-auto space-y-6 text-left"
    >
      <div>
        <label className="block text-xs uppercase tracking-widest text-[#8B837C] font-sans mb-2">
          Nombre y apellido
        </label>
        <input
          {...register("name", { required: true })}
          className="w-full bg-[#F8F5F0] border-b border-[#D8C7B3] px-4 py-3 text-sm text-[#3A3632] focus:outline-none focus:border-[#9BAFBA] transition-colors rounded-t-md font-sans"
          placeholder={guestInfo.guestName}
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#8B837C] font-sans mb-2">
          Confirmas asistencia?
        </label>
        <div className="flex flex-col xs:flex-row gap-4">
          <label className="flex items-center gap-2 text-sm text-[#3A3632] font-sans cursor-pointer">
            <input type="radio" value="yes" {...register("attending", { required: true })} className="accent-[#9BAFBA]" />
            Si, confirmo
          </label>
          <label className="flex items-center gap-2 text-sm text-[#3A3632] font-sans cursor-pointer">
            <input type="radio" value="no" {...register("attending")} className="accent-[#9BAFBA]" />
            No podre asistir
          </label>
        </div>
      </div>

      {watch("attending") === "yes" && (
        <>
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#8B837C] font-sans mb-2">
              Cantidad de asistentes
            </label>
            <select
              {...register("count")}
              className="w-full bg-[#F8F5F0] border-b border-[#D8C7B3] px-4 py-3 text-sm text-[#3A3632] focus:outline-none focus:border-[#9BAFBA] transition-colors rounded-t-md font-sans"
            >
              {availableSeats.map((seat) => (
                <option key={seat} value={seat}>
                  {seat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[#8B837C] font-sans mb-2">
              Nombres de acompanantes
            </label>
            <input
              {...register("companions")}
              className="w-full bg-[#F8F5F0] border-b border-[#D8C7B3] px-4 py-3 text-sm text-[#3A3632] focus:outline-none focus:border-[#9BAFBA] transition-colors rounded-t-md font-sans"
              placeholder="Si aplica..."
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[#8B837C] font-sans mb-2">
              Restriccion alimentaria
            </label>
            <input
              {...register("diet")}
              className="w-full bg-[#F8F5F0] border-b border-[#D8C7B3] px-4 py-3 text-sm text-[#3A3632] focus:outline-none focus:border-[#9BAFBA] transition-colors rounded-t-md font-sans"
              placeholder="Vegetariano, celiaco, etc."
            />
          </div>
        </>
      )}

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#8B837C] font-sans mb-2">
          Mensaje para los novios
        </label>
        <textarea
          {...register("message")}
          rows={3}
          className="w-full bg-[#F8F5F0] border-b border-[#D8C7B3] px-4 py-3 text-sm text-[#3A3632] focus:outline-none focus:border-[#9BAFBA] transition-colors rounded-t-md font-sans resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-[#9BAFBA] hover:bg-[#8397a2] text-white font-sans tracking-widest text-xs uppercase rounded-full transition-colors duration-300 shadow-md"
      >
        Confirmar asistencia
      </button>
    </form>
  );
}
