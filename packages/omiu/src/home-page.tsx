import { tag, Component } from 'omi'
import '@/components/button/button'
import { tailwind } from '@/tailwind'
import demoPages from './pages'

@tag('home-page')
export class ButtonLink extends Component {
  static css = [tailwind]

  show = false
  render() {
    return (
      <div class="mt-10">
        {demoPages.map(({ section, pages }) => (
          <div class="mb-10" key={section}>
            {pages.length > 0 && <h2 class="text-2xl my-3">{section}</h2>}
            {pages.map(({ name, path }) => (
              <o-button uppercase={false} class="mb-1 mr-1" tag="a" href={`#${path}`} key={name}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </o-button>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
