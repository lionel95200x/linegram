import { Tab, TabButton, TabGroup, TabList, TabPanel, TabPanels } from '@/components/dashboard/Base/Headless';
import Lucide from '@/components/dashboard/Base/Lucide';
import HeaderInformation from '@/components/dashboard/HeaderInformation/HeaderInformation';
import SubscriptionView from '@/components/dashboard/SubscriptionView/SubscriptionView';
import { getSubscription } from '@/features/account/controllers/get-subscription';
import { getUser } from '@/features/account/controllers/get-user';
import { getAgent, updateAgent } from '@/features/agents/controllers/get-agents';
import { getCalls } from '@/features/calls/controllers/get-calls';
import { getProducts } from '@/features/pricing/controllers/get-products';
import { Price, ProductWithPrices } from '@/features/pricing/types';

async function getSubscriptionInfo() {
  const [subscription, products] = await Promise.all([getSubscription(), getProducts()]);

  let userProduct: ProductWithPrices | undefined;
  let userPrice: Price | undefined;

  if (subscription) {
    for (const product of products) {
      for (const price of product.prices) {
        if (price.id === subscription.price_id) {
          userProduct = product;
          userPrice = price;
        }
      }
    }
  }

  return {
    subscription,
    products,
    userProduct,
    userPrice,
  };
}
async function AgentPage({ params }: { params: { id: string } }) {
  const [agent, user] = await Promise.all([getAgent(params.id), getUser()]);
  const [calls] = await Promise.all([getCalls()]);

  const subscriptionInfo = await getSubscriptionInfo();
  async function updateAgentAction(p: { prompt: string; firstSentence: string; name: string }) {
    'use server';

    const prompt = p.prompt;
    const firstSentence = p.firstSentence;
    const name = p.name;

    const res = await updateAgent(params.id, {
      prompt,
      firstSentence,
      name,
    });
    return { data: res?.data };
  }

  const infosIcon = [
    { icon: 'Mail', text: 'toto@mail.com' },
    { icon: 'Instagram', text: 'Abonnement Gratuit' },
    { icon: 'Check', text: 'Inscrit depuis le 12/06/2024' },
  ];
  return (
    <>
      <div className='intro-y mt-8 flex items-center'>
        <h2 className='mr-auto text-lg font-medium'>Gestion du compte</h2>
      </div>
      <TabGroup defaultIndex={1}>
        <div className='intro-y box mt-5 px-5 pt-5'>
          <HeaderInformation infos={infosIcon} />
          <TabList variant='link-tabs' className='flex-col justify-center text-center sm:flex-row lg:justify-start'>
            <Tab fullWidth={false}>
              <TabButton className='flex cursor-pointer items-center py-4'>
                <Lucide icon='User' className='mr-2 h-4 w-4' /> Mon profil
              </TabButton>
            </Tab>
            <Tab fullWidth={false}>
              <TabButton className='flex cursor-pointer items-center py-4'>
                <Lucide icon='Shield' className='mr-2 h-4 w-4' />
                Abonnement
              </TabButton>
            </Tab>
            <Tab fullWidth={false}>
              <TabButton className='flex cursor-pointer items-center py-4'>
                <Lucide icon='PhoneCall' className='mr-2 h-4 w-4' />
                Facture
              </TabButton>
            </Tab>
          </TabList>
        </div>

        <TabPanels className='mt-5'>
          <TabPanel>
            <div>Mon profil</div>
          </TabPanel>
          <TabPanel>
            <SubscriptionView {...subscriptionInfo} />
          </TabPanel>
          <TabPanel>
            <div>Facture</div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}

export default AgentPage;
