import { toast } from "react-toastify";
import { api } from "./api";

export async function createTransaction(
  title: string,
  value: Number,
  type: string,
  userId: string,
  groupId: any
) {
  try {
    await api.post("transaction", {
      title,
      value,
      type,
      author: userId,
      group: groupId,
    });
    toast.success("Transação cadastrada!");
  } catch (error) {
    toast.error("Erro ao cadastrar transação!");
  }
}

export async function getTransactions(groupId: string) {
  try {
    const transaction = await api.get(`transactions?group=${groupId}`);
    return transaction.data;
  } catch (error) {
    toast.error(
      "Não foi possível sincronizar as transações do grupo, tente novamente mais tarde!"
    );
  }
}
