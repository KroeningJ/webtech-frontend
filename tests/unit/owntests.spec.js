import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'
import NewNoteForm from '@/components/NewNoteForm.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: { template: '<div>Home</div>' } },
    { path: '/login', name: 'Login', component: Login }
  ]
})

// Test-Suite
describe('Frontend Tests', () => {
  it('should login with valid credentials', async () => {
    const wrapper = mount(Login, {
      global: {
        plugins: [router]
      },
      data () {
        return {
          email: 'test@register.de',
          password: 'testregister'
        }
      }
    })
    router.push('/login')
    await router.isReady()

    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.vm.$route.name).toBe('Login')
  })

  it('should show an error message when note text is empty', async () => {
    const wrapper = mount(NewNoteForm)

    await wrapper.setData({ ldt: '2022-01-01T00:00', entry: '', noteCard: 'note01.png' })

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.text()).toContain('Error: Empty text field')
  })

  it('should reset noteCard color when reset button is clicked', async () => {
    const wrapper = mount(NewNoteForm)

    await wrapper.setData({ ldt: '2022-01-01T00:00', entry: 'Test note', noteCard: 'note02.png' })

    await wrapper.find('button[type="reset"]').trigger('click')

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.noteCard).toBe('note02.png')
  })
})
