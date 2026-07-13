import { weddingData } from "./weddingData";

export type GuestInfo = {
  guestName: string;
  reservedSeats: number;
};

export function getGuestFromUrl(search = window.location.search): GuestInfo {
  const params = new URLSearchParams(search);
  const guestName = params.get("invitado")?.trim() || weddingData.guestDefaults.guestName;
  const parsedSeats = Number(params.get("lugares"));
  const reservedSeats =
    Number.isFinite(parsedSeats) && parsedSeats > 0
      ? Math.floor(parsedSeats)
      : weddingData.guestDefaults.reservedSeats;

  return {
    guestName,
    reservedSeats,
  };
}
