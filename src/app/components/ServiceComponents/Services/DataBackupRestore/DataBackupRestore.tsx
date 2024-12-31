import Accordion from '@/app/components/sharedComponents/Accordion/Accordion'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function DataBackupRestore({ service }: ServiceDetailsProps) {
  const faqItems = [
    {
      question:
        "What should I do first if I lose hard drive data from my hard disk?",
      answer:
        "Stop using the drive immediately to prevent overwriting files. Check the Recycle Bin and consider using data recovery software or professional services.",
    },
    {
      question:
        "Can I recover deleted files from a formatted hard disk recovery?",
      answer:
        "Yes, deleted files can often be recovered from a formatted hard drive, as data typically remains until overwritten.",
    },
    {
      question: "Is it safe to use data recovery software on my own?",
      answer:
        "Using data recovery software can be safe if instructions are followed. If unsure, seek help from a professional to avoid further data loss.",
    },
    {
      question: "How long does data recovery usually take?",
      answer:
        "Recovery time varies; simple cases may take hours, while complex ones can take days. We prioritize quick turnaround times.",
    },
    {
      question: "What types of storage devices can you recover data from?",
      answer:
        "We recover data from hard disk drives (HDDs), solid-state drives (SSDs), USB drives, memory cards, and more.",
    },
  ];

  return (
    <div>
      <Showcase backgroundImage={service?.image} title={service?.name} />
      <div className='container mx-auto mt-[-100px]'>
        <div>
          <div className='hidden lg:grid grid-cols-3 gap-8'>
            <div className='bg-white py-14 px-7 text-center shadow-lg'>
              <div className='flex justify-center items-center'>
                <Image src={'/banner-card-icon-1.png'} width={150} height={150} alt='' className='w-[100px] h-[100px]' />
              </div>
              <h6 className='text-xl font-bold pt-5 pb-1'>Select the <span className='text-primaryColor'>Service</span></h6>
              <p>Pick the services you are looking for- from the website or app.</p>
            </div>
            <div className='bg-white py-10 px-7 text-center shadow-lg'>
              <div className='flex justify-center items-center'>
                <Image src={'/banner-card-icon-2.png'} width={150} height={150} alt='' className='w-[100px] h-[100px]' />
              </div>
              <h6 className='text-xl font-bold pt-5 pb-1'>Pick Up Your <span className='text-primaryColor'>Schedule</span></h6>
              <p>Pick your convenient date and time to avail the service.</p>
            </div>
            <div className='bg-white py-10 px-7 text-center shadow-lg'>
              <div className='flex justify-center items-center'>
                <Image src={'/banner-card-icon-3.png'} width={150} height={150} alt='' className='w-[100px] h-[100px]' />
              </div>
              <h6 className='text-xl font-bold pt-5 pb-1'><span className='text-primaryColor'>Book</span> Appointment</h6>
              <p>Review and book your appointment. We’ll assign the expert technicians schedule for you.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-8 md:pt-14 lg:pt-20 xl:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 xl:gap-20">
          <div>
            <Image
              src={service?.image}
              width={565}
              height={506}
              alt="details iamge"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 lg:pb-7">
              {service?.name}
            </h3>

            <div
              dangerouslySetInnerHTML={{
                __html: service?.description ?? ""
              }}
            ></div>
          </div>
        </div>

      </div>
      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <div>

          <div>
            <p className='text-center'>Losing important data from your hard disk can be very stressful. It can happen for many reasons, like accidentally deleting files, having hardware problems, or experiencing
              file corruption. But there’s no need to panic—most lost data can be restored. At <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geeks CRS</a>, we offer professional and secure data rescue from hard disk services. We are designed to help you
              efficiently retrieve lost files from your hard drive. Our expert team uses advanced techniques to recover data quickly from external hard drives. Our data recovery service ensures that your
              important documents, photos, and files are safely restored. Whether it’s a personal mishap or a technical issue, we’re here to provide fast, reliable data recovery service to get your data
              back without hassle. You can trust us to carefully and accurately handle your data recovery from the hard disk.</p>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Common Causes of <span className='text-primaryColor'>Data Loss</span></h3>
            <p>
              Before learning how to restore data from a wiped hard drive, it's essential to understand why occurs data loss from a dead hard drive. Various factors can lead to data loss, some of which are
              preventable, while others are beyond your control.
            </p>

            <div className="py-8 space-y-6">
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-backup-restore-1.png"
                  alt="Don't know how to backup data"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">1. Accidental Deletion:</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      This is one of the most common reasons for data loss. You may unintentionally delete important files or folders if they're not in the Recycle Bin or Trash. They can seem permanently lost.
                      However, most files can still be recovered if caught early, as the actual data often remains on the hard disk.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-backup-restore-2.png"
                  alt="restore data from the hard disk"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">2. Hard Drive Failure:</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Over time, hard drives experience wear and tear, leading to mechanical or electrical failures. Physical damage, like dropping the drive or exposure to extreme heat, can also render the drive
                      inaccessible. When this happens, our <a href="https://geekify.com.au/services/data-recovery" className='text-primaryColor underline'>data recovery</a> service may require professional assistance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-backup-restore-3.png"
                  alt="Virus Attack to delete data"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">3. Corruption or Virus Attack:</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Viruses, malware, or system errors can corrupt files, making them unusable or even causing them to disappear. Corrupted files may seem intact but fail to open or behave unusually, and without
                      immediate action, the damage could worsen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-backup-restore-4.png"
                  alt="Accidentally formatting a hard drive"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">4. Formatting Errors:</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Accidentally formatting a hard drive or one of its partitions erases all the data stored on it. That makes the drive appear empty. While this seems catastrophic, stellar data recovery tools
                      can often restore files from formatted drives, as the data isn’t completely erased until overwritten.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-backup-restore-5.png"
                  alt="restoring data from software"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">5. Software or System Crashes:</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600">
                      Sudden software crashes, power outages, or unexpected system failures can lead to the loss of unsaved or un-synchronized files. These situations often occur without warning, making regular
                      backups essential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>How to Restore <span className='text-primaryColor'>Data from HDD</span></h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <div className='w-[70%] md:w-[55%] bg-[#FEB800] rounded-br-[75px]'>
                  <h5 className='text-3xl font-normal uppercase py-4 text-left pl-8 text-white'>step 1</h5>
                </div>
                <h6 className='font-bold text-xl italic py-4'>Check the Recycle Bin</h6>
                <p>Before trying any hard drive recovery software, check if your files are in the Recycle Bin. This is the easiest way to restore data from a hard disk without extra tools. If the files are there,
                  right-click and select “Restore” to send them back to their original location.</p>
              </div>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <div className='w-[70%] md:w-[55%] bg-[#F5804E] rounded-br-[75px]'>
                  <h5 className='text-3xl font-normal uppercase py-4 text-left pl-8 text-white'>step 2</h5>
                </div>
                <h6 className='font-bold text-xl italic py-4'>Use Data Recovery Software</h6>
                <p>If the Recycle Bin is empty or you’ve permanently deleted the files, don’t panic! There are specialized software tools at geekscrs.com.au. That is designed to hard drive recovery data from HDDs.</p>
              </div>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <div className='w-[70%] md:w-[55%] bg-[#0090C3] rounded-br-[75px]'>
                  <h5 className='text-3xl font-normal uppercase py-4 text-left pl-8 text-white'>step 3</h5>
                </div>
                <h6 className='font-bold text-xl italic py-4'>Professional Data Recovery Services</h6>
                <p>In cases where software can’t recover your data such as physical damage or severe corruption, you may need professional help. Our Geeks CRS offers expert hard drive recovery services to help <a href="https://geekify.com.au/services/data-backup-restore" className='text-primaryColor underline'>restore data from hard</a> disk.
                  Our team usesadvanced techniques to recover data from damaged or corrupted drives that software alone can’t fix.</p>
              </div>
            </div>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>Restore Data from <span className='text-primaryColor'>Mac Hard Disk Drive</span></h3>
            <p className='mb-4'>If you're using a Mac, the process of restoring data from your hard drive is a bit different due to macOS's built-in file recovery tool. One of the most useful features is Time
              Machine, and Wonder-share Recover-it are built-in tools designed for automatic backups. Time Machine regularly creates backups of your files. That allows you to restore deleted or lost data easily.</p>

            <p className='py-3'>
              To restore data using Time Machine, connect your backup drive, and open the Time Machine app. Navigate to the point in time when your data is still present. Select the files or folders you want to
              recover and click "Restore" to return them to their original location.
            </p>
            <p>
              If you don’t have a Time Machine backup, you can still recover lost data using third-party restore data from hard disk. This is a very useful recovered files and data recovery tool.
            </p>
          </div>
        </div>
      </div>

      <QuickContact title='Contact Us Today for Expert CCTV Installation Services' />

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Restoring Data from<span className='text-primaryColor'> Mac’s Time Machine Backup</span></h3>
        <p className='mb-4 text-center pb-4'>
          If you’ve been using Time Machine on your Mac to regularly back up your data, restoring lost files is a simple process. Time Machine is a built-in backup and recovery tool. That allows you to
          automatically save copies of your files on an external drive. If you’ve accidentally deleted a file or need to recover data, here’s how to restore data mac using Time Machine.
        </p>
        <Image src={'/data-backup-restore-6.png'} alt='restoring data from mac' width={1200} height={900} className='w-full h-auto' />
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-2'>Step 1: Connect Your Time Machine Backup Drive</h5>
          <p>
            Start by connecting the external drive where your Time Machine backups are stored to your Mac. This drive should already have backups of your system and files if Time Machine has been properly set up.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>Step 2: Open the Time Machine App</h5>
          <p>
            Next, open the Time Machine app. You can find it in the Applications folder or by clicking on the Time Machine icon in the menu bar. This will launch the interface where you can browse through your
            previous backups.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>Step 3: Browse Through Backups</h5>
          <p>
            Time Machine lets you scroll back in time to view different versions of your folders and file recovery. Once the app is open, you can navigate through your backups by date. Find the specific point in
            time when the file or folder you want to restore was still present on your system.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>Step 4: Restore the File or Folder</h5>
          <p>
            Once you’ve located the deleted file or folder, simply select it and click the Restore button. Time Machine will automatically restore the file to its original location on your Mac. That makes it
            available for use again.
          </p>
        </div>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500'>This straightforward process ensures that you can quickly retrieve your lost data as long as you have a backup on Time Machine. If you
          haven't enabled Time Machine yet, it's highly recommended to do so to help prevent future data loss.</p>


        <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28 text-center'>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>No Backup?<span className='text-primaryColor'> Use Data File Recovery Tools for Mac</span></h3>
          <p className='mb-4'>If you don’t have a Time Machine backup, don’t worry there are still ways to recover lost data on your Mac. You can use Mac-compatible Easiest <a href="https://geekify.com.au/services/data-recovery" className='text-primaryColor underline'>data recovery</a> wizard software like Disk
            Drill or EaseUS to help retrieve your files. These programs scan your hard drive for deleted or lost data that hasn’t been overwritten, helping you recover what you need.</p>

          <p className='pt-3'>
            To use these tools, download and install the hard disk recovery software, and run a deep scan on your hard drive. The software will display a list of recoverable files. You can then preview and select
            the files you need to restore. While these tools may not always guarantee 100% success, they often provide a reliable way to wise data recovery. They offer a reliable option when backups are unavailable.
          </p>
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>Restore Data from<span className='text-primaryColor'> USB Drives</span></h3>
          <p>Data loss is unpredictable, but you can minimize its impact by following these backup best practices:</p>

          <div className='flex flex-col md:flex-row items-center gap-5 py-3'>
            <Image src={'/data-recovery-5.png'} width={200} height={200} alt='restore data from the USB' className='w-auto h-auto' />
            <ul className='list-disc ml-5'>
              <li><span className='font-bold'>Regular Backups</span> - Create regular backups of your important files on external drives, cloud storage (like Google Drive, OneDrive, or
                iCloud), or network-attached storage (NAS).</li>
              <li><span className='font-bold'>Use Version Control</span> - Enable version control for your files. So you can revert to previous versions in case of accidental
                edits or deletions.</li>
              <li><span className='font-bold'>Protect Against Malware</span> - Install antivirus software and update it regularly to prevent data loss from viruses and restore
                data from hard disk.</li>
              <li><span className='font-bold'>Monitor Hard Drive Health</span> - Use hard disk to monitor the health of your hard drive. So you can replace it before it
                fails and restore data from hard disk.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-5'>How to Backup Data <span className='text-primaryColor'>- A Step-by-Step Guide</span></h3>
        <p className='mb-4'>
          Backing up your EaseUS data recovery wizard is one of the best ways to prevent permanent loss. Here’s a simple guide on how to back up your data:
        </p>

        <div className='my-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>Using an External Hard Drive</h5>
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Connect the External Drive</span> - Plug an external hard drive into your computer’s USB port to recover files.</li>
            <li><span className='font-bold'>Manually Copy Files</span> - Open File Explorer or Finder, then drag and drop important files to the external drive.</li>
            <li><span className='font-bold'>Automate the Backup</span> - Use built-in tools like File History (Windows) or Time Machine (Mac) to automate the process.</li>
          </ul>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>Using Cloud Storage</h5>
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Choose a Cloud Service</span> – Pick a service like Google Drive, OneDrive, Dropbox, or iCloud to recover files.</li>
            <li><span className='font-bold'>Upload Your Files</span> – Create folders and upload your important documents, photos, and videos.</li>
            <li><span className='font-bold'>Enable Auto-Sync</span> – Set up the desktop app for your chosen cloud service to sync your files automatically to the cloud.</li>
          </ul>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>Network Attached Storage (NAS)</h5>
          <p className='pb-2'>
            For businesses or users with larger data needs, NAS systems are great for automated backups over a local network. Here’s how to set it up:
          </p>
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Install NAS Software</span> – Most NAS devices come with easy-to-use software and they restore data from hard disk.</li>
            <li><span className='font-bold'>Configure Backup Rules</span> – Set schedules for automatic backups from your computers to the NAS.</li>
            <li><span className='font-bold'>Access Anywhere</span> – Many NAS solutions allow you to access your files remotely, providing extra convenience.</li>
          </ul>
        </div>


        <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>Why Choose <span className='text-primaryColor'>geekscrs.com.au</span> for Data Recovery?</h3>
          <p>At <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geeks CRS</a>, we recognize the importance of your data and the stress that comes with losing it. Our restore data from hard disk experts specialize in retrieving lost files from
            various storage devices, including hard drives, USBs, and more. Whether you accidentally delete important documents or face a significant hard drive failure, our team is dedicated to swiftly and
            securely helping you recover files, hard drives, and your data.</p>

          <p className='py-4'>
            We utilize advanced tools and state-of-the-art technology to maximize the chances of your external hard drive recovery. That ensures the highest success rate possible. Our experienced technicians have
            years of expertise in the field of hard disk data recovery. That equips them with the knowledge needed to handle various data loss situations effectively and windows file recovery.
          </p>

          <p>
            We pride ourselves on offering affordable services. Our competitive pricing means you can get high-quality recovering data from hard disk management without breaking the bank. We understand that
            time is of the essence. So we aim for a fast turnaround to restore your hard drive data quickly. At geekscrs.com.au, our goal is to provide reliable, efficient, and professional hard drive data
            recovery services tailored to meet your needs. Trust us to help you recover what matters most.
          </p>
        </div>
      </div>


      <div className='container mx-auto'>
        <h3 className='text-2xl lg:text-4xl font-bold text-center pb-8'>Frequently Asked <span className='text-primaryColor'>Questions</span></h3>
         
        <Accordion items={faqItems} />
      </div>

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold pb-6 uppercase italic'>In the end</h3>
        <p className='pb-5'>
          Losing secure data recovery doesn’t have to be the end. Whether you need to restore deleted data from a hard disk, USB, or Mac, there are effective solutions available to help recover your files.
          At geekscrs.com.au, we provide professional and reliable services to restore your deleted data and get you back on track. Don't hesitate to reach out to our team of experts for a consultation.
        </p>
        <p className='font-bold italic'>Let’s start your deleted data recovery process today.</p>
      </div>

    </div>
  )
}

export default DataBackupRestore