import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { targetTimer, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTimer * 1000)) * 100);

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>Você perdeu!</h2>}
      {!userLost && <h2>Sua pontuação: {score}</h2>}
      <p>
        O tempo alvo era <strong>{targetTimer} segundos.</strong>
      </p>
      <p>
        Você parou o cronômetro faltanda{" "}
        <strong>{formattedRemainingTime} segundos.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
