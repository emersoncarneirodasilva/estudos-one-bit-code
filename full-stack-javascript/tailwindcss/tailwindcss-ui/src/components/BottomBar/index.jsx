import { useState } from "react";
import {
  FiAlertOctagon,
  FiArchive,
  FiEdit3,
  FiFileText,
  FiInbox,
  FiMenu,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import Button from "./Button";

export default function Bottombar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const inlineIcon = "inline mb-1 md:mr-2";
  const smOnlyText = "hidden sm:inline";

  return (
    <div className="relative flex items-center w-full gap-2 md:hidden">
      <Button>
        <FiEdit3 className={inlineIcon} />
        <span className={smOnlyText}>Escrever</span>
      </Button>
      <Button active>
        <FiInbox className={inlineIcon} />
        <span className={smOnlyText}>Caixa de Entrada</span>
      </Button>
      <Button>
        <FiFileText className={inlineIcon} />
        <span className={smOnlyText}>Rascunhos</span>
      </Button>
      <Button onClick={() => setIsMenuOpen((state) => !state)}>
        {isMenuOpen ? (
          <>
            <FiX className={inlineIcon} />
            <span className={smOnlyText}>Fechar</span>
          </>
        ) : (
          <>
            <FiMenu className={inlineIcon} />
            <span className={smOnlyText}>Mais</span>
          </>
        )}
      </Button>

      <div
        className={`
          ${isMenuOpen ? "absolute" : "hidden"}
          flex flex-col gap-2 w-40 right-0 bottom-12
        `}
      >
        <Button>
          <FiArchive className="inline mb-1 mr-2" />
          Arquivados
        </Button>
        <Button>
          <FiAlertOctagon className="inline mb-1 mr-2" />
          Spam
        </Button>
        <Button>
          <FiTrash2 className="inline mb-1 mr-2" />
          Lixeira
        </Button>
      </div>
    </div>
  );
}
