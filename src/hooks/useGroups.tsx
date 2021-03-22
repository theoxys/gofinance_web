import { createContext, useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface GroupData {
  name: string;
  id: string;
  group_id: string;
}

interface Participant {
  username: string;
  avatar: string | null;
  email: string;
  id: string;
  payd_value: number;
  user_balance: number;
}

interface ContextData {
  createGroup(credentials: any): Promise<void>;
  leaveGroup(userId: string): Promise<void>;
  joinGroup(userId: string, groupId: string): Promise<{}>;
  getGroup(groupId: string): Promise<void>;
  group: GroupData;
  participants: Participant[];
  absoluteBalance: number;
  setNewAbsolutBalance(groupId: string, value: number): Promise<void>;
}

export const GroupContext = createContext<ContextData>({} as ContextData);

export const GroupProvider: React.FC = ({ children }) => {
  const [group, setGroup] = useState<GroupData>({} as GroupData);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [absoluteBalance, setAbsoluteBalance] = useState(0);

  const getGroup = useCallback(async (groupId: string) => {
    try {
      const response = await api.get(`groups/${groupId}`);
      setGroup(response.data);
      setParticipants(response.data.participants);
      setAbsoluteBalance(response.data.absolute_value);

      return response.data;
    } catch (error) {
      throw new Error("Erro no servidor, tente novamente mais tarde");
    }
  }, []);

  const leaveGroup = useCallback(async (userId: string) => {
    try {
      const response = await api.put(`users/${userId}`, {
        group: null,
      });
      toast.success("Você deixou o groupo!");
      setGroup({} as GroupData);
      setParticipants([]);
      setAbsoluteBalance(0);
      return response.data;
    } catch (error) {
      toast.error("Erro ao tentar sair do grupo 😔");
    }
  }, []);

  const joinGroup = useCallback(async (userId: string, groupId: string) => {
    try {
      const response = await api.get(`groups?group_id=${groupId}`);
      const newUser = await api.put(`users/${userId}`, {
        group: response.data[0].id,
        payd_value: 0,
        user_balance: 0,
      });
      toast.success(`Bem vindo ao grupo ${response.data[0].name}!`);

      setGroup(response.data[0]);
      setParticipants(response.data[0].participants);
      setAbsoluteBalance(response.data[0].absolute_value);

      return newUser.data;
    } catch (errorJoingroup) {
      toast.error("Não foi possível encontrar o grupo 😔");
    }
  }, []);

  const createGroup = useCallback(async ({ name, group_id, userId }) => {
    try {
      const newGroup = await api.post("groups", {
        name,
        group_id,
        participants: [userId],
      });

      const newUser = await api.get(`users/${userId}`);
      toast.success("Grupo cirado com sucesso!");

      setGroup(newGroup.data);
      setParticipants(newGroup.data.participants);
      setAbsoluteBalance(newGroup.data.absolute_value);
      return newUser.data;
    } catch (error) {
      toast.error("Erro ao criar grupo, tente usar um ID diferente!");
    }
  }, []);
  const setNewAbsolutBalance = useCallback(
    async (groupId: string, value: number) => {
      const response = await api.put(`groups/${groupId}`, {
        absolute_value: value,
      });
      setAbsoluteBalance(response.data.absolute_value);
    },
    []
  );

  return (
    <GroupContext.Provider
      value={{
        createGroup,
        leaveGroup,
        group,
        participants,
        getGroup,
        joinGroup,
        absoluteBalance,
        setNewAbsolutBalance,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export function useGroup() {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("useGroup must be used within an GroupProvider!");
  }

  return context;
}
