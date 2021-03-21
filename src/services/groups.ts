import { toast } from "react-toastify";
import { api } from "./api";

interface GroupData {
  name: string;
  group_id: string;
  userId?: string;
}

export async function getGroupById(groupId: string) {
  try {
    const response = await api.get(`groups/${groupId}`);
    return response.data;
  } catch (error) {
    throw new Error("Erro no servidor, tente novamente mais tarde");
  }
}

export async function joinGroup(userId: string, groupId: string) {
  const response = await api.get(`groups?group_id=${groupId}`);
  try {
    const newUser = await api.put(`users/${userId}`, {
      group: response.data[0].id,
    });
    toast.success(`Bem vindo ao grupo ${response.data.name}!`);
    return newUser.data;
  } catch (errorJoingroup) {
    toast.error("Não foi possível encontrar o grupo 😔");
  }
}

export async function leaveGroup(userId: string) {
  try {
    const response = await api.put(`users/${userId}`, {
      group: null,
    });
    toast.success("Você deixou o groupo!");
    return response.data;
  } catch (error) {
    toast.error("Erro ao tentar sair do grupo 😔");
  }
}

export async function createGroup({ name, group_id, userId }: GroupData) {
  try {
    await api.post("groups", {
      name,
      group_id,
      participants: [userId],
    });

    const newUser = api.get(`users/${userId}`);
    toast.success("Grupo cirado com sucesso!");
    return (await newUser).data;
  } catch (error) {
    toast.error("Erro ao criar grupo, tente usar um ID diferente!");
  }
}
