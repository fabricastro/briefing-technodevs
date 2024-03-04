import { Input, Textarea , CheckboxGroup, Checkbox, Button} from "@nextui-org/react";
export const Form = () => {
  return (
    <form
      action=""
      className="w-[400px]  justify-center justify-items-center rounded-xl bg-[#000] bg-opacity-75 p-10 shadow-md sm:w-[400px] md:w-[800px] mx-auto my-10"
    >
      <div className="flex w-full flex-col flex-wrap gap-4 pt-10 md:flex-nowrap">
        <h1 className="pb-5 text-[26px] text-purple-100">
          Primero completa el siguiente formulario para poder reservar nuestra
          llamada gratuita
        </h1>

        <Input type="email" label="Name" />

        <Input type="email" label="Email" />

        <Textarea
          label="Description"
          placeholder="Enter your description"
          className="max-w-xs"
        />

        <CheckboxGroup
        className="text-purple-100"
          color="success"
          label="Como nos has conocido?"
          defaultValue={["instagram"]}
        >
          <Checkbox color="default" value="instagram">Instagram</Checkbox>
          <Checkbox value="facebook">Facebook</Checkbox>
          <Checkbox value="google">Google</Checkbox>
          <Checkbox value="sitio-web">Sitio Web / Blog</Checkbox>
          <Checkbox value="recomendacion">Recomendación</Checkbox>
        </CheckboxGroup>

        <Input type="text" label="Sitio Web (En caso de tener)"  />

        <CheckboxGroup
        className="text-purple-100"
          color="success"
          label="¿Cuántos son en el equipo?"
          defaultValue={["instagram"]}
        >
          <Checkbox value="instagram">Solo yo</Checkbox>
          <Checkbox value="facebook">De 2 a 5 persona</Checkbox>
          <Checkbox value="google">De 5 a 10 personas</Checkbox>
          <Checkbox value="sitio-web">De 10 a 50</Checkbox>
          <Checkbox value="recomendacion">Más de 50</Checkbox>
        </CheckboxGroup>
        
        <Input type="text" label="¿Cuánto invierten en marketing digital?" />

        <CheckboxGroup
        
          color="success"
          label="¿Qué tipo de presupuesto tienen?"
          defaultValue={["instagram"]}
        >
          <Checkbox value="instagram" className={`"label":"color:white"`} > Menos de USD 1200</Checkbox>
          <Checkbox value="facebook">Menos de USD 1200</Checkbox>
          <Checkbox value="sitio-web">Entre USD 1500 - 1800</Checkbox>
          <Checkbox value="recomendacion">Más de USD 1800</Checkbox>
        </CheckboxGroup>

        <Textarea
          label="Escribir aquí"
          placeholder="Cuéntame más sobre el proyecto. ¿En qué consiste? ¿Qué esperas conseguir?"
          className="max-w-xs"
        />
        <Button color="primary">Enviar Formulario</Button>
      </div>
    </form>
  );
};
