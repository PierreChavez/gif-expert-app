import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe('Prueba de componente GifItem', () => {

    const title = 'Prueba 999';
    const url = 'https://miurl/gitf.jpgu';

    test('debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title}  url={url} />)
        expect(container).toMatchSnapshot();
    })

    test('debe de mostar la imagen con el url dado y el alt indicado', () => { 

        render(<GifItem title={title}  url={url} />)

        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);

    //    expect(screen.getByRole('img').alt).toBe(title)
    //    expect(screen.getByRole('img').src).toBe(url);


     })


     test('debe de mostar el titulo en el componente', () => { 

        render(<GifItem title={title}  url={url} />)

        expect(screen.getByText(title)).toBeTruthy();
        
      })

})