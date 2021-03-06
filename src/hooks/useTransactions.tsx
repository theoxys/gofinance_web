import { createContext, useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface TransactionData {
  title: string;
  value: number;
  created_at: string;
  type: string;
  author: string;
  group: string;
}

interface ContextData {
  transactions: TransactionData[] | undefined;
  createTransaction(any: any): Promise<void>;
  getTransactions(any: any): Promise<void>;
  loadingTransactions: boolean;
}

export const TransactionContext = createContext<ContextData>({} as ContextData);

export const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransaction] = useState<TransactionData[]>();
  const [loadingTransactions, setLoadingTransactions] = useState(true);

  const getTransactions = useCallback(async (groupId) => {
    setLoadingTransactions(true);
    try {
      const transaction = await api.get(`transactions?group=${groupId}`);
      setTransaction(transaction.data);
      setLoadingTransactions(false);
    } catch (error) {
      toast.error(
        "Não foi possível sincronizar as transações do grupo, tente novamente mais tarde!"
      );
    }
  }, []);

  const createTransaction = useCallback(
    async ({ title, value, type, userId, groupId }) => {
      try {
        await api.post("transactions", {
          title,
          value,
          type,
          author: userId,
          group: groupId,
        });
        toast.success("Transação cadastrada!");
        getTransactions(groupId);
      } catch (error) {
        toast.error("Erro ao cadastrar transação!");
      }
    },
    [getTransactions]
  );

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        createTransaction,
        getTransactions,
        loadingTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error(
      "useTransaction must be used within an TransactionProvider"
    );
  }
  return context;
};
