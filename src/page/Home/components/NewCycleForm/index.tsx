import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";

import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";


export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext();

    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                id="task"
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
                {...register('task')}
            />

            <datalist id="task-suggestion">
                <option value="Projeto 1" />
                <option value="Projeto 2" />
                <option value="Projeto 3" />
                <option value="Projeto 4" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                disabled={!!activeCycle}
                step={5}
                max={60}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormContainer>

    );
}